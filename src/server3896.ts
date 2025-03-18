
const express = require('express')
import {handler3896} from "./handler3896";
const app = express()
app.get('/3896', handler3896)
app.listen(3000, () => {})
        