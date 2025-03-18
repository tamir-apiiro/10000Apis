
const express = require('express')
import {handler1017} from "./handler1017";
const app = express()
app.get('/1017', handler1017)
app.listen(3000, () => {})
        