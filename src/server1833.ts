
const express = require('express')
import {handler1833} from "./handler1833";
const app = express()
app.get('/1833', handler1833)
app.listen(3000, () => {})
        