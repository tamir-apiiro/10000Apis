
const express = require('express')
import {handler3083} from "./handler3083";
const app = express()
app.get('/3083', handler3083)
app.listen(3000, () => {})
        