import {I18nLabel} from "../i18n/labels";

interface AppContainerProps {
    pageTitle?: string,
    children: React.ReactNode,
    Id: string
}

function PageLayout(props: AppContainerProps) {
  return (
    <div className=" p-[1rem] mx-auto flex flex-col items-center min-h-[75vh]">
      <div className="xs:w-24">
        <h2 className="text-[1rem] lg:text-[2rem]"><I18nLabel label={props.pageTitle ?? ""} /></h2>
      </div>
        <div className='w-[50%]'>{props.children}</div>
    </div>
  )
}

export default PageLayout
