
const express = require('express')
import {handler7087} from "./handler7087";
const app = express()
app.get('/7087', handler7087)
app.listen(3000, () => {})
        