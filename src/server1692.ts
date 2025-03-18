
const express = require('express')
import {handler1692} from "./handler1692";
const app = express()
app.get('/1692', handler1692)
app.listen(3000, () => {})
        