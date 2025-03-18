
const express = require('express')
import {handler1669} from "./handler1669";
const app = express()
app.get('/1669', handler1669)
app.listen(3000, () => {})
        