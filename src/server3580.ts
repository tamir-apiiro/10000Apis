
const express = require('express')
import {handler3580} from "./handler3580";
const app = express()
app.get('/3580', handler3580)
app.listen(3000, () => {})
        