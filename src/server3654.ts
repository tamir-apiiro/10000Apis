
const express = require('express')
import {handler3654} from "./handler3654";
const app = express()
app.get('/3654', handler3654)
app.listen(3000, () => {})
        