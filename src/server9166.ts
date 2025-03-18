
const express = require('express')
import {handler9166} from "./handler9166";
const app = express()
app.get('/9166', handler9166)
app.listen(3000, () => {})
        