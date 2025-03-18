
const express = require('express')
import {handler1795} from "./handler1795";
const app = express()
app.get('/1795', handler1795)
app.listen(3000, () => {})
        