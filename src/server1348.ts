
const express = require('express')
import {handler1348} from "./handler1348";
const app = express()
app.get('/1348', handler1348)
app.listen(3000, () => {})
        