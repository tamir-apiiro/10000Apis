
const express = require('express')
import {handler1090} from "./handler1090";
const app = express()
app.get('/1090', handler1090)
app.listen(3000, () => {})
        