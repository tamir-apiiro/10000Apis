
const express = require('express')
import {handler3166} from "./handler3166";
const app = express()
app.get('/3166', handler3166)
app.listen(3000, () => {})
        