
const express = require('express')
import {handler1971} from "./handler1971";
const app = express()
app.get('/1971', handler1971)
app.listen(3000, () => {})
        