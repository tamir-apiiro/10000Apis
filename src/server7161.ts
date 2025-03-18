
const express = require('express')
import {handler7161} from "./handler7161";
const app = express()
app.get('/7161', handler7161)
app.listen(3000, () => {})
        