
const express = require('express')
import {handler1743} from "./handler1743";
const app = express()
app.get('/1743', handler1743)
app.listen(3000, () => {})
        