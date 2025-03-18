
const express = require('express')
import {handler7957} from "./handler7957";
const app = express()
app.get('/7957', handler7957)
app.listen(3000, () => {})
        