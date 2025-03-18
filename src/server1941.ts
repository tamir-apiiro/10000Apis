
const express = require('express')
import {handler1941} from "./handler1941";
const app = express()
app.get('/1941', handler1941)
app.listen(3000, () => {})
        