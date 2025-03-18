
const express = require('express')
import {handler3062} from "./handler3062";
const app = express()
app.get('/3062', handler3062)
app.listen(3000, () => {})
        