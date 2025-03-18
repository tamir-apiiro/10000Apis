
const express = require('express')
import {handler260} from "./handler260";
const app = express()
app.get('/260', handler260)
app.listen(3000, () => {})
        