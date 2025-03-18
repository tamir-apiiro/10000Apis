
const express = require('express')
import {handler1691} from "./handler1691";
const app = express()
app.get('/1691', handler1691)
app.listen(3000, () => {})
        