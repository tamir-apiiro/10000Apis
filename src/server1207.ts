
const express = require('express')
import {handler1207} from "./handler1207";
const app = express()
app.get('/1207', handler1207)
app.listen(3000, () => {})
        