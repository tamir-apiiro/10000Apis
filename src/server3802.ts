
const express = require('express')
import {handler3802} from "./handler3802";
const app = express()
app.get('/3802', handler3802)
app.listen(3000, () => {})
        