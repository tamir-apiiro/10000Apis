
const express = require('express')
import {handler580} from "./handler580";
const app = express()
app.get('/580', handler580)
app.listen(3000, () => {})
        