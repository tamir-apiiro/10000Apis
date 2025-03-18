
const express = require('express')
import {handler1032} from "./handler1032";
const app = express()
app.get('/1032', handler1032)
app.listen(3000, () => {})
        