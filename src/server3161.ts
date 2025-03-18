
const express = require('express')
import {handler3161} from "./handler3161";
const app = express()
app.get('/3161', handler3161)
app.listen(3000, () => {})
        