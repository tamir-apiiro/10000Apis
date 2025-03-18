
const express = require('express')
import {handler1166} from "./handler1166";
const app = express()
app.get('/1166', handler1166)
app.listen(3000, () => {})
        