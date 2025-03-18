
const express = require('express')
import {handler2850} from "./handler2850";
const app = express()
app.get('/2850', handler2850)
app.listen(3000, () => {})
        