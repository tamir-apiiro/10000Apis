
const express = require('express')
import {handler5440} from "./handler5440";
const app = express()
app.get('/5440', handler5440)
app.listen(3000, () => {})
        