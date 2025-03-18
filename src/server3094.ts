
const express = require('express')
import {handler3094} from "./handler3094";
const app = express()
app.get('/3094', handler3094)
app.listen(3000, () => {})
        