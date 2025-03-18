
const express = require('express')
import {handler1878} from "./handler1878";
const app = express()
app.get('/1878', handler1878)
app.listen(3000, () => {})
        