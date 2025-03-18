
const express = require('express')
import {handler957} from "./handler957";
const app = express()
app.get('/957', handler957)
app.listen(3000, () => {})
        