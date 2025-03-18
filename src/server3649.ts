
const express = require('express')
import {handler3649} from "./handler3649";
const app = express()
app.get('/3649', handler3649)
app.listen(3000, () => {})
        