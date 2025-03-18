
const express = require('express')
import {handler7015} from "./handler7015";
const app = express()
app.get('/7015', handler7015)
app.listen(3000, () => {})
        