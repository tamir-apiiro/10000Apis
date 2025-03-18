
const express = require('express')
import {handler7898} from "./handler7898";
const app = express()
app.get('/7898', handler7898)
app.listen(3000, () => {})
        