
const express = require('express')
import {handler5083} from "./handler5083";
const app = express()
app.get('/5083', handler5083)
app.listen(3000, () => {})
        