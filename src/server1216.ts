
const express = require('express')
import {handler1216} from "./handler1216";
const app = express()
app.get('/1216', handler1216)
app.listen(3000, () => {})
        