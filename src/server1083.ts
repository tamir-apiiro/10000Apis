
const express = require('express')
import {handler1083} from "./handler1083";
const app = express()
app.get('/1083', handler1083)
app.listen(3000, () => {})
        