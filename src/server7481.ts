
const express = require('express')
import {handler7481} from "./handler7481";
const app = express()
app.get('/7481', handler7481)
app.listen(3000, () => {})
        