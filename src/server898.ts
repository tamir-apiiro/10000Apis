
const express = require('express')
import {handler898} from "./handler898";
const app = express()
app.get('/898', handler898)
app.listen(3000, () => {})
        