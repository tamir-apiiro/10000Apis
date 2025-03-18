
const express = require('express')
import {handler1957} from "./handler1957";
const app = express()
app.get('/1957', handler1957)
app.listen(3000, () => {})
        