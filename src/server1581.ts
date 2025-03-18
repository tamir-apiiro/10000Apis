
const express = require('express')
import {handler1581} from "./handler1581";
const app = express()
app.get('/1581', handler1581)
app.listen(3000, () => {})
        