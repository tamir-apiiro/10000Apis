
const express = require('express')
import {handler705} from "./handler705";
const app = express()
app.get('/705', handler705)
app.listen(3000, () => {})
        