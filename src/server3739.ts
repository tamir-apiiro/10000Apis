
const express = require('express')
import {handler3739} from "./handler3739";
const app = express()
app.get('/3739', handler3739)
app.listen(3000, () => {})
        