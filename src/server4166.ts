
const express = require('express')
import {handler4166} from "./handler4166";
const app = express()
app.get('/4166', handler4166)
app.listen(3000, () => {})
        