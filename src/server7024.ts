
const express = require('express')
import {handler7024} from "./handler7024";
const app = express()
app.get('/7024', handler7024)
app.listen(3000, () => {})
        