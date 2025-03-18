
const express = require('express')
import {handler850} from "./handler850";
const app = express()
app.get('/850', handler850)
app.listen(3000, () => {})
        