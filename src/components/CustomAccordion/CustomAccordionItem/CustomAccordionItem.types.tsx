import React from 'react';

export interface Props {
    item: ReportListItem;
    expanded?: boolean;
    handlePress?: React.Dispatch<React.SetStateAction<string>>;
}

export interface ReportListItem {
    comment: string;
    created_at: string;
    daily_work_report_id?: number;
    id: string;
    jira_key?: string | null;
    jira_url?: string | null;
    project_id?: number | null;
    project_name: string | null;
    spent_time: number;
    task_id?: number | null;
    task_name?: string | null;
    updated_at: string;
    user_id?: number;
    work_type?: string;
    user?: number;
    project?: number;
}
