
const express = require('express')
import {handler7047} from "./handler7047";
const app = express()
app.get('/7047', handler7047)
app.listen(3000, () => {})
        