
const express = require('express')
import {handler1230} from "./handler1230";
const app = express()
app.get('/1230', handler1230)
app.listen(3000, () => {})
        