
const express = require('express')
import {handler7062} from "./handler7062";
const app = express()
app.get('/7062', handler7062)
app.listen(3000, () => {})
        